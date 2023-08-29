#!/usr/bin/env python3

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Return a random float number"""
    rdn: float = random.uniform(0, max_delay)
    await asyncio.sleep(rdn)
    return rdn
