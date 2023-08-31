#!/usr/bin/env python3
"""Module to work with async comprehension
"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Yield a random number between 0 and 10"""
    float_numbers = [i async for i in async_generator()]
    return float_numbers
