	var yo = require('yo-yo')

	module.exports = yo`<form action="">
								<div class="columns small-4">
									<label for="txt-nombre">Nombre Cliente:</label>
									<input id="txt-nombre" type="text">
									<label for="txt-cantidad">Cantidad:</label>
									<input id="txt-cantidad" type="text" value="1000">
									<label for="txt-multiplicidad">Multiplicidad:</label>
									<input id="txt-multiplicidad" type="text" value="3">
									<label for="txt-moldes">Moldes:</label>
									<input id="txt-moldes" type="text" value="4">
									<label for="txt-sobrantes">Sobrantes:</label>
									<input id="txt-sobrantes" type="text" value="4">
								</div>
								<div class="columns small-4">
									<fieldset>
										<label>Escoja el tipo de papel:</label>
										<input id="autocopiativo" type="radio" name="tipo-papel" value="autocopiativo">
										<label for="autocopiativo">Autocopiativo</label>
										<input id="bond" type="radio" name="tipo-papel" value="bond">
										<label for="bond">Bond</label>
									</fieldset>
									<fieldset>
										<label>Escoja el tipo de impresion:</label>
										<input id="tinta" type="radio" name="tipo-impresion" value="tinta">
										<label for="tinta">Tinta</label>
										<input id="laser" type="radio" name="tipo-impresion" value="laser">
										<label for="laser">Láser</label>
									</fieldset>
									<label for="txt-valorresma">Valor Resma</label>
									<input id="txt-valorresma" type="text" value="2800">
									<label for="txt-hojasporresma">Número de hojas por resma</label>
									<input id="txt-hojasporresma" type="text" value="500">
								</div>
								<div class="columns small-4 text-center">
									<a class="button" id="btnCalcular">Calcular</a>
									<a class="button" id="btnCalcular2">Calcular</a>
								</div>
							</form>`