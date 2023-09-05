#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""


def update_topics(mongo_collection, name, topics):
    """Change a document based on query"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
