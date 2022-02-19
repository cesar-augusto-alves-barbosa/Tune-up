package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class RegisterEngineServiceActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_engine_service)
    }
    fun redirectToRegisterBeautyPreparation(v: View){
        startActivity(Intent(this, RegisterBeautyPreparationServicesActivity::class.java))
    }
    fun redirectToRegisterBrakeService(v: View){
        startActivity(Intent(this, RegisterBrakeServiceActivity::class.java))
    }
}