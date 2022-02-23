import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Select, MenuItem, Stack, Button } from "@mui/material";
import catsService from "./../services/cats.service";

export default function AddEditForm({ action, cat }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    catsService.getAllBreeds().then((res) => setBreeds(res));
  }, []);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      nameCat: cat?.name ? cat.name : "Борис",
      price: cat?.price ? cat.price : 100,
      color: cat?.color ? cat.color : "Черный",
      breed: cat?.breed.nameBreed ? cat.breed.nameBreed : "Френчи",
      age: cat?.age ? cat.age : 1,
    },
  });
  const onSubmit = (data) => {
    action(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2} style={{ margin: "12px 0" }}>
        <Controller
          name="nameCat"
          control={control}
          render={({ field, fieldState }) => (
            <TextField label="Имя кота" {...field} error={fieldState.error} />
          )}
          rules={{
            required: "Please enter the name",
            minLength: 4,
            maxLength: 12,
          }}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              label="Цена в час"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              label="Возраст"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Черный">Черный</MenuItem>
              <MenuItem value="Белый">Белый</MenuItem>
              <MenuItem value="Рыжий">Рыжий</MenuItem>
            </Select>
          )}
        />
        {breeds.length && (
          <Controller
            name="breed"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {breeds.map((breed, i) => (
                  <MenuItem key={i} value={breed?.nameBreed}>
                    {breed.nameBreed}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        )}
        <Button variant="contained" type="submit">
          Отправить
        </Button>
      </Stack>
    </form>
  );
}
