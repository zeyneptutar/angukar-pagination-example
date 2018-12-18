import * as _ from 'lodash';

export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, perPage: number = 10) {
        const totalPages = Math.ceil(totalItems / perPage);

        let startPage: number, endPage: number;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        const startIndex = (currentPage - 1) * perPage;
        const endIndex = Math.min(startIndex + perPage - 1, totalItems - 1);

        const pages = _.range(startPage, endPage + 1);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            perPage: perPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
