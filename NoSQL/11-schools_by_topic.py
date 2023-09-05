#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""


def schools_by_topic(mongo_collection, topic):
    """retrieve a document based on query"""
    results = mongo_collection.find(
        {"topics": topic}
    )
    return results
