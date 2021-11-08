const items = buildItems()
console.log("Сортировка по удельной цене даёт:")
testGreedy(items, 18, cmpDencity)

function cmpDencity(itemA, itemB)
{
	const r = 1/itemA.value - 1/itemA.weight//здесь вам надо задать сравнение по удельной цене
	return r
}

function testGreedy(items, maxWeight, cmpFunction)
{
	const {totalValue, taken} = greedy(items, maxWeight, cmpFunction)
	console.log("Полная цена = ", totalValue.toString())
	console.log("Взяли:", taken.toString())
}

function greedy(items, maxWeight, cmpFunction)
{
	items.sort(cmpFunction)
	items.reverse()
	let totalWeight = 0
	let totalValue = 0
	const taken = []
	for (let i = 0; i < items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i].weight
			totalValue += items[i].value
		}
	}
	return {totalValue: totalValue, taken: taken}
}


function buildItems()
{
	const names = ["ваза","часы", "картина",   "книга","радио", "компьютер"]
	const values = [50,175, 90,   10,20, 200]
	const weights = [2,10, 9,   1,4, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i],
			value: values[i],
			weight: weights[i]
		})
	}
	return items
}

