package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class VisualizationInfoWorkshopActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_visualization_info_workshop)
    }

    fun editInfoWorkshop(v : View) {
        startActivity(Intent(this, UpdateInfoWorkshopActivity::class.java))
    }

    fun backHomeProfile(v : View) {
        startActivity(Intent(this , OwnerProfileActivity::class.java))
    }
}