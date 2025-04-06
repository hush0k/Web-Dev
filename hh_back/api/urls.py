from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='companies'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company_detail'),
    path('companies/<int:company_id>/vacancies', CompanyVacancy.as_view(), name='company_vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancies'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy_detail'),
    path('vacancies/top-ten', VacancyTopTen.as_view(), name='vacancy_top_ten'),
]