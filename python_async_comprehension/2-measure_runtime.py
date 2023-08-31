#!/usr/bin/env python3
"""Module to work with async comprehension
"""
import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Return the time it took to execute async_comprehension"""
    start_time = time.time()
    await asyncio.gather(*[async_comprehension() for i in range(4)])
    end_time = time.time()
    total_time = end_time - start_time
    return total_time
