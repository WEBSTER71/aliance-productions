<template>
	<div class="contracts">
		<div class='contracts__container _container'>
			<div class="contracts__row">
				<div class="contracts__column">
					<div v-if="$route.meta.bgProducts == true" class="contracts__img"><img src="../../assets/img/homepage/contracts-1.jpg" alt=""></div>
					<div v-else class="contracts__img"><img src="../../assets/img/homepage/mark-1.jpg" alt=""></div>
				</div>
				<div class="contracts__column">
					<div class="contracts__items">
						<div class="contracts__line _line"></div>
						<div v-if="$route.meta.titleNum == 2.1" class="contracts__title">Контрактное производство автомобильной химии</div>
						<div v-else-if="$route.meta.titleNum == 2.2" class="contracts__title">Контрактное производство бытовой химии</div>
						<div v-else-if="$route.meta.titleNum == 2.3" class="contracts__title">Контрактное производство дезинфицирующих средств</div>
						<div v-else-if="$route.meta.titleNum == 2.4" class="contracts__title">Контрактное производство пищевых аэрозолей</div>
						<div v-else-if="$route.meta.titleNum == 2.5" class="contracts__title">Контрактное производство косметической продукции</div>
						<div v-else-if="$route.meta.titleNum == 2.6" class="contracts__title">Контрактное производство аэрозольных красок</div>
						<div v-else-if="$route.meta.titleNum == 3.1" class="contracts__title">Собственное производство автохимия AG-Tech</div>
						<div v-else-if="$route.meta.titleNum == 3.2" class="contracts__title">Собственное производство автохимия AP</div>
						<div class="contracts__text">Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость приоритизации разума над эмоциями. Кстати, представители современных социальных резервов неоднозначны и будут описаны максимально подробно.<br><br>
						Но социально-экономическое развитие напрямую зависит от поставленных обществом задач! Безусловно, постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для системы обучения кадров, соответствующей насущным потребностям. В целом, конечно, выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании своевременного выполнения сверхзадачи. А ещё элементы политического процесса представлены в исключительно положительном свете. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада создаёт предпосылки для глубокомысленных рассуждений. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поставленных обществом задач.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contractsComponents',
}
</script>