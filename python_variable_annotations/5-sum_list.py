#!/usr/bin/env python3
"""Module to work with typing
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list in float"""
    suma: float = 0.0

    for item in input_list:
        suma += item
    return suma
