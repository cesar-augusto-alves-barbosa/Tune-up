package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class RegisterBrakeServiceActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_brake_service)
    }
    fun redirectToRegisterEngineService(v:View){
        startActivity(Intent(this, RegisterEngineServiceActivity::class.java))
    }
    fun redirectToRegisterOpeningHoursSpecific(v:View){
        startActivity(Intent(this, RegisterOpeningHoursSpecificActivity::class.java))
    }
}