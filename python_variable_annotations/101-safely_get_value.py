#!/usr/bin/env python3
"""Module to work with typing
"""


from typing import Any, Mapping, TypeVar, Union


def safely_get_value(dct: Mapping, key: Any, default: Union[TypeVar('T'), None] = None):
    """Return a value from a key or value by default"""
    if key in dct:
        return dct[key]
    else:
        return default
