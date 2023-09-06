#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""
import pymongo


def top_students(mongo_collection):
    """retrieve a document based on query"""
    results = mongo_collection.find({})
    scores = dict()
    divisor = dict()
    for result in results:
        scores[result['name']] = 0
        divisor[result['name']] = 0
        courses = result['topics']
        counter = 0
        for course in courses:
            counter += 1
            scores[result['name']] += course['score']
        divisor[result['name']] += counter
        scores[result['name']] /= divisor[result['name']]

    results = mongo_collection.find({})
    for result in results:
        mongo_collection.update_one(
            {
                "name": result['name']
            },
            {
                "$set": {
                            "averageScore": scores[result['name']]
                        }
            }
        )
    return mongo_collection.find().sort("averageScore", pymongo.DESCENDING)
