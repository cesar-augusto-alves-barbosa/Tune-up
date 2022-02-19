package com.example.apptuneup

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.RelativeLayout
import androidx.core.view.isGone

class CreateNewClientActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_new_client)
    }

    fun showPopUpNewClient(v: View) {
        val containerPopUp: RelativeLayout = findViewById(R.id.rl_container_popup_client_detail_edit)
        containerPopUp.isGone = false
    }

    fun gonePopUpNewClient(v: View) {
        val containerPopUp: RelativeLayout = findViewById(R.id.rl_container_popup_client_detail_edit)
        containerPopUp.isGone = true
    }
}