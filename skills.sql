CREATE TABLE skills (
    skill_id INT PRIMARY KEY AUTO_INCREMENT,
    skill_name VARCHAR(50),
    progress_percent INT,
    date_added DATE
);

INSERT INTO skills (skill_name, progress_percent, date_added)
VALUES
('HTML', 90, '2025-11-05'),
('CSS', 80, '2025-11-05'),
('JavaScript', 50, '2025-11-05');