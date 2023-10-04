import classes from './Paginator.module.scss';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { http } from '../../../api/http';
import { Button } from '../Button/Button';

export const Paginator = ({
                            page,
                            pageSize,
                            totalCount,
                            setPage,
                            setUsers,
                            setTotalCount,
                            portionSize = 10,
                            toggleIsFetching
                          }) => {
  const onCurrentPage = (currentPage) => () => {
    toggleIsFetching(true);
    setPage(currentPage);
    http.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        setUsers(response.data.items);
        setTotalCount(response.data.totalCount);
        toggleIsFetching(false);
      });
  }

  const pagesCount = Math.ceil(totalCount / pageSize);
  const currentPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    currentPages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [currentPortion, setCurrentPortion] = useState(1);
  const leftBorderPortion = (currentPortion - 1) * portionSize + 1;
  const rightBorderPortion = currentPortion * portionSize;

  const onPrevButton = () => {
    setCurrentPortion(currentPortion - 1);
  };

  const onNextButton = () => {
    setCurrentPortion(currentPortion + 1);
  };

  useEffect(() => {
    setCurrentPortion(Math.ceil(page / portionSize))
  }, [page]);

  return (
    <div className={classes.paginator}>
      {currentPortion > 1 && <Button extraClass={classes.paginatorButton} text={'Prev'} onClick={onPrevButton} />}
      <div className={classes.paginatorBlock}>
        {
          currentPages
            .filter((currentPage) => currentPage >= leftBorderPortion && currentPage <= rightBorderPortion)
            .map((currentPage) => {
              return (
                <div
                  className={cn({[classes.selectedPage]: currentPage === page}, classes.pageNumber)}
                  key={currentPage}
                  onClick={onCurrentPage(currentPage)}>
                  {currentPage}
                </div>
              )
            })
        }
      </div>
      {currentPortion < portionCount && <Button extraClass={classes.paginatorButton} text={'Next'} onClick={onNextButton} />}
    </div>
  )
};
