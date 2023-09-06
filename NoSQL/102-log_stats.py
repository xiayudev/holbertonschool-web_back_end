#!/usr/bin/env python3
"""Module to work with mongoDB with pymongo
"""
from pymongo import MongoClient


if __name__ == "__main__":
    MONGO_URI = "mongodb://localhost:27017"
    client = MongoClient(MONGO_URI)
    db = client['logs']
    collection = db['nginx']

    get_method = collection.count_documents({'method': 'GET'})
    post_method = collection.count_documents({'method': 'POST'})
    put_method = collection.count_documents({'method': 'PUT'})
    patch_method = collection.count_documents({'method': 'PATCH'})
    delete_method = collection.count_documents({'method': 'DELETE'})
    status = collection.count_documents({'path': "/status"})
    total_logs = collection.count_documents({})

    print("{} logs".format(total_logs))
    print("Methods:")
    print("\tmethod GET: {}".format(get_method))
    print("\tmethod POST: {}".format(post_method))
    print("\tmethod PUT: {}".format(put_method))
    print("\tmethod PATCH: {}".format(patch_method))
    print("\tmethod DELETE: {}".format(delete_method))
    print("{} status check".format(status))

    ips = dict()
    results = collection.find({})
    for result in results:
        if ips.get(result['ip'], "Not found") == "Not found":
            ips[result['ip']] = 0
        else:
            ips[result['ip']] += 1

    ips_sorted = sorted(list(ips.items()), key=lambda x: x[1], reverse=True)
    print("IPs:")
    if ips_sorted:
        for i, ip in enumerate(ips_sorted):
            if i > 9:
                break
            print("\t{}: {}".format(ip[0], ip[1]))
