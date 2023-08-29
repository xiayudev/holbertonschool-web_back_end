#!/usr/bin/env python3
"""Module to work with typing
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function of type Callable"""
    def func(num: float):
        return num * multiplier
    return func
