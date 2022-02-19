package com.example.apptuneup

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ImageView
import android.widget.PopupMenu
import android.widget.Toast

class ClientDetailsNoPlaceholderActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_client_details_no_placeholder)

        val menu_options = findViewById<ImageView>(R.id.iv_options_menu)

        menu_options.setOnClickListener {
            val popupMenu = PopupMenu(this, it)
            popupMenu.setOnMenuItemClickListener { item ->
                when (item.itemId){
                    R.id.menu_edit -> {

                        // IMPORTANTE!
                        // Trocar val intent para tela de ClientDetails
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://google.com.br"))
                        startActivity(intent)
                        true
                    }
                    R.id.menu_delete -> {
                        Toast.makeText(this, "Cliente deletado com sucesso!", Toast.LENGTH_LONG).show()
                        true
                    }
                    else -> false
                }
            }

            popupMenu.inflate(R.menu.edit_delete_menu)

            try {
                val fieldMPopup = PopupMenu::class.java.getDeclaredField("mPopup")
                fieldMPopup.isAccessible = true
                val mPopup = fieldMPopup.get(popupMenu)
                mPopup.javaClass
                    .getDeclaredMethod("setForceShowIcon", Boolean::class.java)
                    .invoke(mPopup, true)
            } catch (e: Exception) {
                Log.e("ClientDetailsNoPlaceholderActivity", "Error showing menu icons.", e)
            }

            popupMenu.show()
        }
    }
}