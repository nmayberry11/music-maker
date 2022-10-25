import { Pipe, PipeTransform } from '@angular/core';

type sortByType = "title" | "artist";

@Pipe({
  name: "sortArray"
})
export class SortArrayPipe implements PipeTransform {
  transform<T>(arrayToSort: T[], sortingField: sortByType) {
    const sortedArr = arrayToSort.slice().sort((itemA: T, itemB: T) => {
      if (itemA[sortingField].toLowerCase() > itemB[sortingField].toLowerCase())
        return 1;

      if (itemA[sortingField].toLowerCase() < itemB[sortingField].toLowerCase())
        return -1;

      return 0;
    });

    return sortedArr;
  }
}
