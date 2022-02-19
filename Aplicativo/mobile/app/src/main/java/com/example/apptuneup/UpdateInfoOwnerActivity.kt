package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class UpdateInfoOwnerActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_update_info_owner)
    }

    fun backHomeProfile(v : View) {
        startActivity(Intent(this, OwnerProfileActivity::class.java))
    }
}