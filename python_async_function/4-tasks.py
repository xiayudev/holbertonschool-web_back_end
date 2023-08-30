#!/usr/bin/env python3
"""Module to work with async
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Generates a function n times"""
    numbers = await asyncio.gather(
        *[task_wait_random(max_delay) for _ in range(n)])
    sort_list = sorted(numbers)
    return sort_list
