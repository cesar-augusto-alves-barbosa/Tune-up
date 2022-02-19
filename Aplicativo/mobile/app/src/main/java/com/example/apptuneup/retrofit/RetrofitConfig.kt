package com.example.apptuneup.retrofit

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import okhttp3.OkHttpClient

class RetrofitConfig {
    companion object {
        private var retrofit: Retrofit =
            Retrofit.Builder()
            .baseUrl("http://ec2-3-219-66-150.compute-1.amazonaws.com:8080/")
            .client(OkHttpClient.Builder().build())
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        fun <T> createService(serviceClass:Class<T>):T {
            return retrofit.create(serviceClass)
        }
    }

}