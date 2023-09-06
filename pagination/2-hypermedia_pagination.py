#!/usr/bin/env python3
"""Module to work with pagination
"""


from typing import List, Tuple
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """return index start and index end"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return the pagination required"""
        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0
        pag = index_range(page, page_size)
        if pag[0] > len(self.dataset()) or pag[1] > len(self.dataset()):
            return list()
        return [self.dataset()[i] for i in range(pag[0], pag[1])]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return a dictionary"""
        return {
            'page_size': len(self.get_page(page, page_size)),
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': None if page == 3000 else page + 1,
            'prev_page': None if page == 1 else page - 1,
            'total_pages': math.ceil(len(self.dataset()) / page_size)
        }
