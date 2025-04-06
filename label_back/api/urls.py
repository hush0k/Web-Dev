from django.urls import path

from .views import *

urlpatterns = [
    path('label/', LabelListAPIView.as_view(), name='label-list'),
    path('label/<int:pk>/', LabelDetailAPIView.as_view(), name='label-detail'),
    path('label/<int:label_id>/artists', LabelArtistAPIView.as_view(), name='label-artists'),
    path('artist/', ArtistListAPIView.as_view(), name='artist-list'),
    path('artist/<int:pk>/', ArtistDetailAPIView.as_view(), name='artist-detail'),
    path('artist/top-ten/', ArtistTopTenAPIView.as_view(), name='artist-top-ten'),
]