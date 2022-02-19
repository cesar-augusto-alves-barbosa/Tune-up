package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class VisualizationInfoOwnerActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_visualization_info_owner)
    }

    fun backHomeProfile(v : View) {
        startActivity(Intent(this, OwnerProfileActivity::class.java))
    }

    fun editInfoWorkshop(v : View) {
        startActivity(Intent(this, UpdateInfoOwnerActivity::class.java))
    }
}