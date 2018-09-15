package com.example.dell.labassignment;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class Register extends AppCompatActivity {

    Button b3;
    EditText ename,email,emob,epassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        ename = (EditText) findViewById(R.id.editText8);
        email = (EditText) findViewById(R.id.editText9);
        emob = (EditText) findViewById(R.id.editText10);
        epassword = (EditText) findViewById(R.id.editText11);
        b3 = (Button) findViewById(R.id.button4);

        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent reg = new Intent(Register.this,Login.class);
                Register.this.startActivity(reg);
            }
        });

    }
}
