import { Plus, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TeacherClasses() {
  const [turmas, setTurmas] = useState([
    { curso: "Humanidades", ano: "12º", turma: "B", disciplina: "História A" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [studentsInput, setStudentsInput] = useState("");
  const [copyLink, setCopyLink] = useState(false);

  const courseSubjects = {
    "Ciências e Tecnologias": [
      "Português",
      "Educação Física",
      "Língua Estrangeira I ou II",
      "Filosofia",
      "Matemática A",
      "Físico-Quimica A",
      "Biologia e Geologia A",
      "Geometria Descritiva A",
    ],
    Humanidades: [
      "Português",
      "Educação Física",
      "Língua Estrangeira I ou II",
      "Filosofia",
      "História A",
      "Geografia A",
      "Matemática Aplicada às Ciências Sociais",
      "Língua Estrangeira II ou III",
    ],
    Economia: [
      "Português",
      "Educação Física",
      "Língua Estrangeira I ou II",
      "Filosofia",
      "Matemática A",
      "Economia A",
      "Geografia A",
      "História B",
    ],
    Artes: [
      "Português",
      "Educação Física",
      "Língua Estrangeira I ou II",
      "Filosofia",
      "Desenho A",
      "Geometria Descritiva A",
      "Matemática B",
      "História e Cultura das Artes",
    ],
  };

  const toggleModal = () => setShowModal(!showModal);

  const handleCreateClass = () => {
    if (!selectedCourse || !selectedYear || !selectedClass || !selectedSubject)
      return;

    const novaTurma = {
      curso: selectedCourse,
      ano: selectedYear,
      turma: selectedClass,
      disciplina: selectedSubject,
    };

    setTurmas([...turmas, novaTurma]);
    setSelectedCourse("");
    setSelectedYear("");
    setSelectedClass("");
    setSelectedSubject("");
    setStudentsInput("");
    setCopyLink(false);
    setShowModal(false);
  };

  const turmasOrdenadas = [...turmas].sort((a, b) =>
    a.disciplina.localeCompare(b.disciplina)
  );

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[40%] text-black shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Nova Turma</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Curso */}
              <div>
                <label className="block text-sm font-medium mb-1">Course</label>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={selectedCourse}
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                    setSelectedSubject(""); // Limpa disciplina ao mudar curso
                  }}
                >
                  <option value="">...</option>
                  {Object.keys(courseSubjects).map((curso) => (
                    <option key={curso} value={curso}>
                      {curso}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ano */}
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">...</option>
                  <option>10º</option>
                  <option>11º</option>
                  <option>12º</option>
                </select>
              </div>

              {/* Turma */}
              <div>
                <label className="block text-sm font-medium mb-1">Class</label>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">...</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              {/* Disciplina */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  disabled={!selectedCourse}
                >
                  <option value="">...</option>
                  {selectedCourse &&
                    courseSubjects[selectedCourse].map((disciplina) => (
                      <option key={disciplina} value={disciplina}>
                        {disciplina}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Adicionar Alunos
              </label>
              <input
                type="text"
                value={studentsInput}
                onChange={(e) => setStudentsInput(e.target.value)}
                placeholder="nome@email.com"
                className="w-full border rounded px-2 py-1"
              />
            </div>

            {/* Copiar link */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="copyLink"
                className="mr-2"
                checked={copyLink}
                onChange={() => setCopyLink(!copyLink)}
              />
              <label htmlFor="copyLink">Copiar link</label>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-red-400"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-green-500"
                onClick={handleCreateClass}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Página Principal */}
      <div className="text-white ml-8 p-8">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-4xl font-semibold -mt-4 text-slate-800 mb-2">
            Classes
          </h1>
          <div className="h-px bg-slate-400 w-full"></div>
        </div>

        {/* Lista de turmas + botão adicionar */}
        <div className="flex flex-wrap gap-20 items-center">
          {turmasOrdenadas.map((t, index) => (
            <Link
              key={index}
              to={`/academic/teacher/discipline/${encodeURIComponent(
                t.disciplina
              )}`}
              className="w-65 h-40 bg-slate-700 rounded-3xl flex flex-col items-center justify-center hover:scale-105 transition no-underline text-white"
            >
              <GraduationCap className="w-12 h-12 mb-2" />
              <p className="text-lg font-bold">{t.disciplina}</p>
              <p className="text-sm">
                {t.ano}
                {t.turma}
              </p>
              <p className="text-xs">{t.curso}</p>
            </Link>
          ))}

          {/* Botão de adicionar turma */}
          <button
            onClick={toggleModal}
            className="w-20 h-20 bg-slate-500 hover:bg-slate-400 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TeacherClasses;
