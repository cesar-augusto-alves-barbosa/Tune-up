package com.example.apptuneup

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlin.system.exitProcess

class OwnerProfileActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_owner_profile)
    }

    fun backHome(v : View) {
        startActivity(Intent(this, MainActivity::class.java))
    }

    fun goInfoWorkshop(v : View) {
        startActivity(Intent(this, VisualizationInfoWorkshopActivity::class.java))
    }

    fun goInfoProfileOwner(v : View) {
        startActivity(Intent(this, VisualizationInfoOwnerActivity::class.java))
    }

    fun contactTuneUp(v : View) {
        val intent = Intent(Intent.ACTION_DIAL)
        intent.data = Uri.parse("tel:999999999")
        startActivity(intent)
    }

    fun exitApp(v : View) {
        this@OwnerProfileActivity.finish()
        exitProcess(-1)
    }
}