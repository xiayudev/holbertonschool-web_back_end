#!/usr/bin/env python3
"""Module to work with pagination
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """return index start and index end"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
