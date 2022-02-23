import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Select, MenuItem, Stack, Button } from "@mui/material";
import catsService from "./../services/cats.service";

export default function AddEditForm({ action, cat }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    catsService.getAllBreeds().then((res) => setBreeds(res));
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameCat: cat?.name ? cat.name : "Борис",
      price: cat?.price ? cat.price : 100,
      color: cat?.color ? cat.color : "Черный",
      nameBreed: cat?.breed.nameBreed ? cat.breed.nameBreed : "Френчи",
      age: cat?.age ? cat.age : 1,
    },
  });
  const onSubmit = (data) => {
    if (Object.keys(errors).length) return;
    action(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2} style={{ margin: "12px 0" }}>
        <Controller
          name="nameCat"
          control={control}
          render={({ field }) => (
            <TextField
              label="Имя кота"
              {...field}
              error={!!errors?.nameCat?.type}
              helperText={errors?.nameCat?.type && "Incorrect name"}
            />
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
              error={!!errors?.price?.type}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              helperText={
                errors?.price?.type && "Котик не может стоить столько!!!"
              }
            />
          )}
          rules={{ required: true, max: 5000, min: 100 }}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              label="Возраст"
              {...field}
              error={!!errors?.age?.type}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              helperText={
                errors?.age?.type && "Котику не может быть столько лет!"
              }
            />
          )}
          rules={{ required: true, max: 30, min: 1 }}
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
            name="nameBreed"
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
