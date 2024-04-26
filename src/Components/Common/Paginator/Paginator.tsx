import type { ReactElement } from 'react';
import { useEffect, useState, memo } from 'react';
import cn from 'classnames';
import classes from './Paginator.module.scss';
import { Button } from '../Button/Button';

type PropsType = {
  page: number;
  pageSize: number;
  totalCount: number;
  portionSize?: number;
  onCurrentPage: (currentPage: number) => void;
  isFetching: boolean;
};

export const Paginator = memo<PropsType>(
  ({ page, pageSize, totalCount, portionSize = 10, onCurrentPage, isFetching }): ReactElement => {
    const onCurrentPageClick = (currentPage: number) => (): void => {
      onCurrentPage(currentPage);
    };

    const pagesCount = Math.ceil(totalCount / pageSize);
    const currentPages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
      currentPages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [currentPortion, setCurrentPortion] = useState<number>(1);
    const leftBorderPortion = (currentPortion - 1) * portionSize + 1;
    const rightBorderPortion = currentPortion * portionSize;

    const onPrevButton = (): void => {
      setCurrentPortion(currentPortion - 1);
    };

    const onNextButton = (): void => {
      setCurrentPortion(currentPortion + 1);
    };

    useEffect(() => {
      setCurrentPortion(Math.ceil(page / portionSize));
      // eslint-disable-next-line
    }, [pagesCount]);

    return (
      <div className={classes.paginator}>
        {currentPortion > 1 && (
          <Button className={classes.paginatorButton} text="Prev" onClick={onPrevButton} disabled={isFetching} />
        )}
        <div className={classes.paginatorBlock}>
          {currentPages
            .filter(
              (currentPage: number): boolean => currentPage >= leftBorderPortion && currentPage <= rightBorderPortion
            )
            .map((currentPage: number): ReactElement => {
              return (
                <Button
                  className={cn({ [classes.selectedPage]: currentPage === page }, classes.pageNumber)}
                  text={currentPage}
                  onClick={onCurrentPageClick(currentPage)}
                  disabled={isFetching || currentPage === page}
                  key={currentPage}
                />
              );
            })}
        </div>
        {currentPortion < portionCount && (
          <Button className={classes.paginatorButton} text="Next" onClick={onNextButton} disabled={isFetching} />
        )}
      </div>
    );
  }
);
