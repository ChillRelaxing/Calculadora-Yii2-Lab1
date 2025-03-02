<?php

use yii\helpers\Html;

$this->title = 'Calculadora';
$this->params['breadcrumbs'][] = $this->title;  
?>

<div class="calculadora-index">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <i class="fas fa-calculator"></i>
                Calculadora
            </h3>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="calculator-container">
                        <div class="calculator-header">
                            <span class="calculator-title">Calculadora</span>
                            <span class="star-icon">Leo</span>
                        </div>
                        <div class="calculator-display">
                            <div class="memory-display">M1: 0</div>
                            <div class="main-display" id="display">0</div>      
                            <div class="sub-display" id="subDisplay">0</div>
                        </div>
                        <div class="calculator-label">Matematica</div>
                        <div class="calculator-buttons">
                            <div class="calculator-row">
                                <button class="btn-gray" data-action="mc">MC</button>
                                <button class="btn-gray" data-action="mr">MR</button>
                                <button class="btn-gray" data-action="m-minus">M-</button>
                                <button class="btn-gray" data-action="m-plus">M+</button>
                                <button class="btn-gray" data-action="open-parenthesis">(</button>
                                <button class="btn-gray" data-action="close-parenthesis">)</button>
                            </div>
                            <div class="calculator-row">
                                <button class="btn-gray" data-action="sqrt">√</button>
                                <button class="btn-number" data-number="7">7</button>
                                <button class="btn-number" data-number="8">8</button>
                                <button class="btn-number" data-number="9">9</button>
                                <button class="btn-operator" data-action="divide">÷</button>
                                <button class="btn-operator" data-action="percent">%</button>
                            </div>
                            <div class="calculator-row">
                                <button class="btn-gray" data-action="arrow">→</button>
                                <button class="btn-number" data-number="4">4</button>
                                <button class="btn-number" data-number="5">5</button>
                                <button class="btn-number" data-number="6">6</button>
                                <button class="btn-operator" data-action="multiply">×</button>
                                <button class="btn-operator" data-action="subtract">−</button>
                            </div>
                            <div class="calculator-row">
                                <button class="btn-red" data-action="all-clear">AC</button>
                                <button class="btn-number" data-number="1">1</button>
                                <button class="btn-number" data-number="2">2</button>
                                <button class="btn-number" data-number="3">3</button>
                                <button class="btn-operator btn-tall" rowspan="2" data-action="add">+</button>
                                <button class="btn-equals btn-tall" rowspan="2" data-action="equals">=</button>
                            </div>
                            <div class="calculator-row">
                                <button class="btn-red" data-action="clear">C</button>
                                <button class="btn-number" data-number="0">0</button>
                                <button class="btn-number" data-number="00">00</button>
                                <button class="btn-number" data-number=".">.</button>
                            </div>
                        </div>
                        <div class="calculator-footer">
                            <span>Números decimales: 2</span>
                            <span class="calculator-mode">PC/Mobil</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$this->registerCssFile('@web/css/calculadora.css', ['depends' => [\yii\web\YiiAsset::class]]);
$this->registerJsFile('@web/js/calculadora.js', ['depends' => [\yii\web\JqueryAsset::class]]);
?>