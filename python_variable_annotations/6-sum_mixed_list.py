#!/usr/bin/env python3
"""Module to work with typing
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a mix list in float"""
    suma: float = 0.0

    for item in mxd_lst:
        suma += float(item)
    return suma
