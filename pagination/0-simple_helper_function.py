#!/usr/bin/env python3
"""Module to work with pagination
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """return index start and index end"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
