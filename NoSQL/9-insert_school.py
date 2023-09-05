#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""


def insert_school(mongo_collection, **kwargs):
    """insert a document in a collection"""
    id = mongo_collection.insert_one(kwargs)
    return id.inserted_id
