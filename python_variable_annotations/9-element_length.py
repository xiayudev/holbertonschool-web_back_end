#!/usr/bin/env python3
"""Module to work with typing
"""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list Iterable that contains a Sequence"""
    return [(i, len(i)) for i in lst]
