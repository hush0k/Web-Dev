from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializer import *

@api_view(['GET'])
def get_products(request):
    test_products = [
        {"id": id, "name": "iPhone 15", "price": 999.99, "description": "Latest Apple smartphone", "count": 10,
         "is_active": True},
        {"id": id,"name": "Samsung Galaxy S23", "price": 899.99, "description": "Latest Samsung smartphone", "count": 5,
         "is_active": True},
    ]
    return Response(test_products)

@api_view(['GET'])
def get_product(request, id):
    test_product = {"id": id, "name": "iPhone 15", "price": 999.99, "description": "Latest Apple smartphone",
                    "count": 10, "is_active": True}
    return Response(test_product)

@api_view(['GET'])
def get_categories(request):
    test_categories = [
        {'name':'gadgets'},
        {'name':'foods'},
        {'name':'cars'},
        {'name':'games'},
    ]
    return Response(test_categories)

@api_view(['GET'])
def get_category(request, id):
    test_category = [
        {'id': id, 'name': 'gadgets'},
    ]
    return Response(test_category)


@api_view(['GET'])
def get_category_products(request, id):
    test_products = [
        {"id": 1, "name": "iPhone 15", "price": 999.99, "description": "Latest Apple smartphone", "count": 10,
         "is_active": True, "category_id": 1},
        {"id": 2, "name": "Samsung Galaxy S23", "price": 899.99, "description": "Latest Samsung smartphone", "count": 5,
         "is_active": True, "category_id": 1},
        {"id": 3, "name": "Toyota Camry", "price": 30000, "description": "Reliable car", "count": 2, "is_active": True,
         "category_id": 3},
        {"id": 4, "name": "PS5", "price": 499.99, "description": "Next-gen gaming console", "count": 7,
         "is_active": True, "category_id": 4},
    ]

    filtered_products = [product for product in test_products if product["category_id"] == id]

    return Response(filtered_products)
