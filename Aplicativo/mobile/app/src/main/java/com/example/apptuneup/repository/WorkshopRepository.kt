package com.example.apptuneup.repository

import com.example.apptuneup.model.Workshop
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.Headers
import retrofit2.http.POST


interface WorkshopRepository {
    @Headers("Content-Type: application/json")
    @POST("/oficinas/")
    fun register(@Body workshop:Workshop): Call<Void>
}