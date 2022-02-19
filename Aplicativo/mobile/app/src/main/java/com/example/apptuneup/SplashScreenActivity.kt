package com.example.apptuneup

import android.animation.ObjectAnimator
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ProgressBar
import java.util.*
import kotlin.concurrent.schedule

class SplashScreenActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen)
        val intent = Intent(this, LoginActivity::class.java)

        val progressBar:ProgressBar = findViewById(R.id.progressBar)
        val currentProgress = 600

        progressBar.max = 500
        ObjectAnimator.ofInt(progressBar, "progress", currentProgress)
            .setDuration(2000)
            .start()

        Timer("StartUp", false).schedule(1500) {
            startActivity(intent)
            finish()
        }
    }

}
