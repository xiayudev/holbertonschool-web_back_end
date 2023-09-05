#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""


def list_all(mongo_collection):
    """list all documents in a collection"""
    docs = mongo_collection.find({})
    if not docs:
        return list()
    return docs
