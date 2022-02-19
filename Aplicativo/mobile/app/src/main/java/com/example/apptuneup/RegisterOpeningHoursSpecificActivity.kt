package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class RegisterOpeningHoursSpecificActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_opening_hours_specific)
    }
    fun redirectToRegisterOpeningHours(v: View){
        startActivity(Intent(this, RegisterOpeningHoursActivity::class.java))
    }
    fun redirectToRegisterBrakeService(v: View){
        startActivity(Intent(this, RegisterBrakeServiceActivity::class.java))
    }
}