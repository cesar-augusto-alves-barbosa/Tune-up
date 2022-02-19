package com.example.apptuneup.repository
import com.example.apptuneup.model.Owner
import com.example.apptuneup.models.OwnerModel
import com.example.apptuneup.model.RegisterOwner
import retrofit2.Call
import retrofit2.http.*

interface OwnerRepository {
    @Headers("Content-Type: application/json")
    @POST("/proprietarios/login")
    fun loginOwner(@Body owner:OwnerModel):Call<Void>

    @Headers("Content-Type: application/json")
    @POST("/proprietarios/")
    fun register(@Body owner:RegisterOwner):Call<Int>
}