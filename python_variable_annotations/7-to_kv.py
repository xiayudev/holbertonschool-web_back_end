#!/usr/bin/env python3
"""Module to work with typing
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return the sum of a mix list in float"""
    return (k, float(v ** 2))
