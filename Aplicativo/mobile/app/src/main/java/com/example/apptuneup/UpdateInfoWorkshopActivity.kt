package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class UpdateInfoWorkshopActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_update_info_workshop)
    }

    fun backVisualization(v : View) {
        startActivity(Intent(this, VisualizationInfoWorkshopActivity::class.java))
    }
}