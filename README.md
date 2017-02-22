# How to use

```
const objectserializer = require("objectserializer");

const form = {
    my_form_name: {
        field1: "test",
        field2: ["subtest1", "subtest2", "subtest2"],
        field3: {
            subfield1: "foo",
            subfield2: "bar"
        }
    }
}

const formFlat = objectserializer(form);

console.log(formFlat);
{
    my_form_name[field1]: "test",
    my_form_name[field2]: ["subtest1", "subtest2", "subtest2"],
    my_form_name[field3][subfield1]: "foo",
    my_form_name[field3][subfield2]: "bar"
}
```