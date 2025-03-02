<?php

namespace app\controllers;

use yii\web\Controller;

class CalculadoraController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}
