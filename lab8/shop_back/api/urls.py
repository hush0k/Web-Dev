from django.urls import path
from .views import get_products, get_product, get_categories, get_category, get_category_products

urlpatterns =  [
    path('products/', get_products, name='product-list'),
    path('products/<int:id>/', get_product, name='product-detail'),
    path('categories/', get_categories, name='category-list'),
    path('category/<int:id>/', get_category, name='category-detail'),
    path('categories/<int:id>/products/', get_category_products, name='category-products'),

]
