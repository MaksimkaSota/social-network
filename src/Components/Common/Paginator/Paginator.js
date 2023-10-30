import classes from './Paginator.module.scss';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from '../Button/Button';

export const Paginator = ({
                            page,
                            pageSize,
                            totalCount,
                            portionSize = 10,
                            onCurrentPageCallback,
                            isFetching
                          }) => {
  const onCurrentPage = (currentPage) => () => {
    onCurrentPageCallback(currentPage, pageSize);
  };

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
    setCurrentPortion(Math.ceil(page / portionSize));
  }, []);

  return (
    <div className={classes.paginator}>
      {currentPortion > 1 && <Button className={classes.paginatorButton} text={'Prev'} onClick={onPrevButton} />}
      <div className={classes.paginatorBlock}>
        {
          currentPages
            .filter((currentPage) => currentPage >= leftBorderPortion && currentPage <= rightBorderPortion)
            .map((currentPage) => {
              return (
                <Button
                  className={cn({[classes.selectedPage]: currentPage === page}, classes.pageNumber)}
                  text={currentPage}
                  onClick={onCurrentPage(currentPage)}
                  disabled={isFetching || currentPage === page}
                  key={currentPage}
                />
              )
            })
        }
      </div>
      {currentPortion < portionCount && <Button className={classes.paginatorButton} text={'Next'} onClick={onNextButton} />}
    </div>
  );
};
