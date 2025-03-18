const { Student } = require("../models");

const getAllStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

const getStudentById = async (req, res) => {
  console.log("sanyi");
  
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({ name, email });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    student.name = name;
    student.email = email;
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const deleted = await Student.destroy({ where: { id } });
  if (!deleted) return res.status(404).json({ error: "Student not found" });

  res.status(204).send();
};

module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent, getStudentById };
