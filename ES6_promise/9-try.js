export default function guardrail(mathFunction) { // mathFunction: Function
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const { name, message } = error;
    queue.push(`${name}: ${message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
